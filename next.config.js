const { composePlugins, withNx } = require('@nx/next');
const createNextIntlPlugin = require('next-intl/plugin');

/**
 * @type {import('@nx/next/plugins/with-nx').WithNxOptions}
 **/
const nextConfig = {
  nx: {
    svgr: false,
  },
};

const withNextIntl = createNextIntlPlugin();

const plugins = [withNx, withNextIntl];

module.exports = composePlugins(...plugins)(nextConfig);
