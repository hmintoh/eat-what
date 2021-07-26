import { Client } from "@notionhq/client";

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

const databaseId = process.env.NOTION_DATABASE_ID;

export const getLocations = async () => {
  const res = await notion.databases.query({
    database_id: databaseId,
  });

  return {
    data: res.results,
  };
};
