const AWSCreds = require('./AWSConfig.json')

const env = {
	AWS_ACCESS_KEY: AWSCreds.accessKeyId,
	AWS_SECRET_ACCESS_KEY: AWSCreds.secretAccessKey,
	REGION : AWSCreds.region,
	Bucket: 'dbt-users-data'
};

module.exports = env;
