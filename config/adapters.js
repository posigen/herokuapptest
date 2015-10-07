// Configure installed adapters
// If you define an attribute in your model definition, 
// it will override anything from this global config.
module.exports.adapters = {

	// If you leave the adapter config unspecified 
	// in a model definition, 'default' will be used.
	'default': 'somePostgresqlServer',
	
	mongo: {
		
	},
	
	// In-memory adapter for DEVELOPMENT ONLY
	// (data is NOT preserved when the server shuts down)
	memory: {
		module: 'sails-dirty',
		inMemory: true
	},

	// Persistent adapter for DEVELOPMENT ONLY
	// (data IS preserved when the server shuts down)
	// PLEASE NOTE: disk adapter not compatible with node v0.10.0 currently 
	//				because of limitations in node-dirty
	//				See https://github.com/felixge/node-dirty/issues/34
	disk: {
		module: 'sails-dirty',
		filePath: './.tmp/dirty.db',
		inMemory: false
	},
	
	  somePostgresqlServer: {
		  module: 'sails-postgresql',
			ssl: true,
		    host: 'ec2-50-16-229-89.compute-1.amazonaws.com',
		    user: 'uuvbhdgpsgnjij',
		    password: 'VMjnyKEN6nGzyutyWZ_ucuENCY',
		    database: 'dfcd2jg7claaiu'
		    	//host: 'localhost',
		    	//port: 5432,
		    	//ssl: false,
		    	//poolSize: 10,
		    	//user: 'postgres',
		    	//password: 'postgres123',
		    	//database: 'testheroku'
		  },

	// MySQL is the world's most popular relational database.
	// Learn more: http://en.wikipedia.org/wiki/MySQL
	mysql: {
		module		: 'sails-mysql',
		host		: 'YOUR_MYSQL_SERVER_HOSTNAME_OR_IP_ADDRESS',
		user		: 'YOUR_MYSQL_USER',
		password	: 'YOUR_MYSQL_PASSWORD',
		database	: 'YOUR_MYSQL_DB'
	}
};