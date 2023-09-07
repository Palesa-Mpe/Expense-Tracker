# Expense-Tracker

## Running Locally

### Client
1. Make sure you cd to the client directory.
2. Run `npm start` and access the client on localhost.

*.env*

| Variable          | Ex. Value                  | Description                               |
|-------------------|----------------------------|-------------------------------------------|
| PORT              | 4040                       | PORT localhost will use.                  |
| CLIENT            | http://localhost:8080      | URL to the client website.                |
| CONTACT_POINTS    | localhost                  | Contact point of the Cassandra DB.        |
| DATA_CENTER       | datacenter1                | Data center to use in the contact points. |
| KEYSPACE          | expense_tracker            | The Keyspace where our db is.             |
| KEYSPACE_USERNAME | AWS USER Keyspace username | The credentials obtained from IAM user.   |
| KEYSPACE_PASSWORD | AWS USER Keyspace password | The credentials obtained from IAM user.   |
### Server
1. Make sure you cd to the server directory.
2. Run `npm start` and access the server on localhost.

*.env*

| Variable       | Ex. Value             | Description                    |
|----------------|-----------------------|--------------------------------|
| PORT           | 8080                  | PORT localhost will use.       |
| API            | http://localhost:4040 | URL to the api.                |
