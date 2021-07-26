import { getLocations } from "../../lib/notion";
import { NextApiRequest, NextApiResponse } from "next";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const locations = await getLocations();
  res.status(200).json(locations);
};

export default handler;
