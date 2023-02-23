const Entry = require("../models/entryModel");

exports.getAllEntries = async (req, res, next) => {
  try {
    const entries = await Entry.find();
    res.status(200).send({
      status: 200,
      message: "success",
      length: entries.length,
      data: entries,
    });
  } catch (error) {
    console.log(error);
  }
};

exports.getEntryById = async (req, res, next) => {
  {
    try {
      const entry = await Entry.findById(req.params.id);
      res.status(200).send(entry);
    } catch (error) {
      console.log(error);
    }
  }
};

exports.addEntry = async (req, res, next) => {
  try {
    const entry = new Entry(req.body);
    entry.save();
    res.status(200).send(entry);
  } catch (error) {
    console.log(error);
  }
};

exports.deleteEntryById = async (req, res, next) => {
  try {
    const entry = await Entry.findByIdAndDelete(req.params.id);

    res.status(200).send(entry);
  } catch (error) {
    console.log(error);
  }
};

exports.updateEntryByID = async (req, res, next) => {
  try {
    const entry = await Entry.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    });
    res.status(200).send(entry);
  } catch (error) {
    console.log(error);
  }
};

//in case we want to delete all entries at once, we should chain the below method in the entriesRouter file on home router

// exports.deleteAllEntries = async (req, res, next) => {
//   try {
//     const entry = await Entry.deleteMany();

//     res.status(200).send(entry);
//   } catch (error) {
//     console.log(error);
//   }
// };
