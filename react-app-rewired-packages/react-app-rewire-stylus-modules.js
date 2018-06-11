const cloneDeep = require("lodash.clonedeep");
const path = require("path");

const ENV_PROD = 'production'

const ruleChildren = loader =>
  loader.use ||
  loader.oneOf ||
  (Array.isArray(loader.loader) && loader.loader) ||
  [];

const findIndexAndRules = (rulesSource, ruleMatcher) => {
  let result = undefined;
  const rules = Array.isArray(rulesSource)
    ? rulesSource
    : ruleChildren(rulesSource);
  rules.some(
    (rule, index) =>
      (result = ruleMatcher(rule)
        ? { index, rules }
        : findIndexAndRules(ruleChildren(rule), ruleMatcher))
  );
  return result;
};

const findRule = (rulesSource, ruleMatcher) => {
  const { index, rules } = findIndexAndRules(rulesSource, ruleMatcher);
  return rules[index];
};

const cssRuleMatcher = rule =>
  rule.test && String(rule.test) === String(/\.css$/);

const createLoaderMatcher = loader => rule =>
  rule.loader && rule.loader.indexOf(`${path.sep}${loader}${path.sep}`) !== -1;
const cssLoaderMatcher = createLoaderMatcher("css-loader");
const postcssLoaderMatcher = createLoaderMatcher("postcss-loader");
const fileLoaderMatcher = createLoaderMatcher("file-loader");

const addAfterRule = (rulesSource, ruleMatcher, value) => {
  const { index, rules } = findIndexAndRules(rulesSource, ruleMatcher);
  rules.splice(index + 1, 0, value);
};

const addBeforeRule = (rulesSource, ruleMatcher, value) => {
  const { index, rules } = findIndexAndRules(rulesSource, ruleMatcher);
  rules.splice(index, 0, value);
};

function createRewireStylus(
  localIdentName = `[local]___[hash:base64:5]`,
  stylusLoaderOptions = {}
) {
  return function(config, env) {
    const cssRule = findRule(config.module.rules, cssRuleMatcher);

    /* === START postcss add source map === */
    const cssRulePostCssLoader = findRule(cssRule, postcssLoaderMatcher)
    cssRulePostCssLoader.options = Object.assign({
      sourceMap: true
    }, cssRulePostCssLoader.options)

    if (env === ENV_PROD) {
      cssRule.loader[findIndexAndRules(cssRule, postcssLoaderMatcher).index] = cssRulePostCssLoader
    } else {
      cssRule.use[findIndexAndRules(cssRule, postcssLoaderMatcher).index] = cssRulePostCssLoader
    }
    /* === END postcss add source map === */

    const stylusRule = cloneDeep(cssRule);
    const cssModulesRule = cloneDeep(cssRule);

    cssRule.exclude = /\.module\.css$/;
    cssModulesRule.test = /\.module\.css$/;

    const cssModulesRuleCssLoader = findRule(cssModulesRule, cssLoaderMatcher);
    cssModulesRuleCssLoader.options = Object.assign(
      {
        modules: true,
        localIdentName
      },
      cssModulesRuleCssLoader.options
    );
    addBeforeRule(config.module.rules, fileLoaderMatcher, cssModulesRule);

    stylusRule.test = /\.styl/;
    stylusRule.exclude = /\.module\.styl$/;
    addAfterRule(stylusRule, postcssLoaderMatcher, {
      loader: require.resolve("stylus-loader"),
      options: stylusLoaderOptions
    });
    addBeforeRule(config.module.rules, fileLoaderMatcher, stylusRule);

    const stylusModulesRule = cloneDeep(cssModulesRule);
    stylusModulesRule.test = /\.module\.styl$/;

    addAfterRule(stylusModulesRule, postcssLoaderMatcher, {
      loader: require.resolve("stylus-loader"),
      options: stylusLoaderOptions
    });
    addBeforeRule(config.module.rules, fileLoaderMatcher, stylusModulesRule);

    return config;
  };
}

const rewireStylus = createRewireStylus();

rewireStylus.withLoaderOptions = createRewireStylus;

module.exports = rewireStylus;
