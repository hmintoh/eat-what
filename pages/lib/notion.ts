import { Client } from "@notionhq/client";

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
});

export const getLocations = async () => {
  const res = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID,
  });

  return {
    data: res.results,
  };
};
