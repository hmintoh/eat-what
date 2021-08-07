import { NextApiRequest, NextApiResponse } from "next";
import { getLocations } from "@/utils/notion";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const locations = await getLocations();
  res.status(200).json(locations);
};

export default handler;
