import dbConnect from "../../../db/dbConnect";

import Hero from "../../../models/Hero";

//to execute the function and connect the DB
dbConnect();

//get all records , put a new record

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const heroes = await Hero.find({});
        res.status(200).json({ success: true, hero: heroes });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    case "POST":
      try {
        const hero = await Hero.create(req.body);
        res.status(200).json({ success: true, hero: hero });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;

    default:
      res.status(400).json({ success: false });
      break;
  }
};
