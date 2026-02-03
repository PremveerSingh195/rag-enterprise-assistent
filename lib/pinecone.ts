import { Pinecone } from "@pinecone-database/pinecone";

export const pinecone = new Pinecone({
    apikey:process.env.
})

export const index = pinecone.index()