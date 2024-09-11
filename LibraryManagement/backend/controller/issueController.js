const Issue = require('../models/issueModel');
const Book = require('../models/bookModel'); 
const User = require('../models/userModel');
const { options } = require('../app');

exports.issueBook = async (req, res) => {

    const {id} = req.params;
    const {userId,duedate}  = req.body;

    try {
        const user = await User.findById(userId); 
        if (!user) {
            return res.status(400).json({ success: false, message: "Student not found" });
        }

        const book = await Book.findById(id); 
        if (!book) {
            return res.status(400).json({ success: false, message: "Book not found" });
        }

        if (book.copiesAvailable < 1) {
            return res.status(400).json({ success: false, message: "No copies available" });
        }

        const issue = new Issue({
            user: userId, 
            book: id, 
            dueDate: duedate 
        });
        book.copiesAvailable -= 1; 
        await book.save();

        await issue.save();
        res.status(201).json({ success: true, data: issue });
    } catch (err) {
        res.status(500).json({ success: false, message: err.message });
    }
};

exports.returnBook = async (req, res) => {
    try {
        const { id } = req.params;

        const issue = await Issue.findById(id);

        if (!issue) return res.status(404).json({ message: 'Issue record not found' });

        if (issue.returned) return res.status(400).json({ message: 'Book already returned' });

        issue.returned = true;
        issue.returnDate = Date.now();

        const book = await Book.findById(issue.book);
        book.copiesAvailable += 1;
        await book.save();

        await issue.save();

        res.status(200).json(issue);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message });
    }
};


exports.getAllissues = async(req,res)=>{
  try{
    const issues = await Issue.find().populate('user').populate('book');
    res.status(200).json(issues);
    }catch(err){
      res.status(500).json({ success: false, message: err.message });
      }
}

exports.searchBook = async(req,res)=>{
    try{
        const {query} = req.params;
        const search = await Book.find({
            $or:[

                {title:{$regex:query,$options:'i'}},
                {author:{$regex:query,$options:'i'}}
            ]
            })
            isDeleted = false;
        res.status(200).json({ success: true, data:search});
    }catch(err){
        res.status(500).json({ success: false, message: err.message });
    }
}