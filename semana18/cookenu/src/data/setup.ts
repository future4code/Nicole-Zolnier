import { connection } from './connection/connection'

// Setup query
const setupTables = async (): Promise<void> => {
    try {
        await connection.raw(`
        CREATE TABLE Users (
            id VARCHAR(255) UNIQUE PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            role ENUM("NORMAL", "ADMIN") DEFAULT("NORMAL");
        );
        
        CREATE TABLE Recipes (
            id VARCHAR(255) UNIQUE PRIMARY KEY,
            title VARCHAR(255) NOT NULL,
            description TEXT,
            created_at DATE NOT NULL,
            creator_id VARCHAR(255) NOT NULL,
            FOREIGN KEY (creator_id) REFERENCES Users(id)
        );
        
        CREATE TABLE Following (
            follower_id VARCHAR(255) NOT NULL,
            followed_id VARCHAR(255) NOT NULL,
            FOREIGN KEY (follower_id) REFERENCES Users(id),
            FOREIGN KEY (following_id) REFERENCES Users(id)
        );
        `)

        console.log("Setup complete.")

        connection.destroy()
    } catch (error) {
        console.log(error.sqlMessage || error.message)
        connection.destroy()
    }
}

setupTables()