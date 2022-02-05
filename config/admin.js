module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'b057357ff7ca4dd01155d7a01ad2d10b'),
  },
});
