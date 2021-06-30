const notice = require("../models/notice.model");

const GetAllNotices = async (req, res) => {
	try {
		const notices = await notice.find();
		res.status(200).json(notices);
	} catch (error) {
		res.status(404).json({ message: error.message });
	}
};
const CreateNotice = async (req, res) => {

	const newNotice = await new notice(req.body);

	try {
		await newNotice.save();
		
		res.status(200).json(newNotice);
	} catch (error) {
		res.status(409).json({ message: error.message });
	}
};

const GetByapproval = async (req, res) => {
	
	if (req.params.isApproved) {
		try {
			const Count = await notice.countDocuments({
				isApproved: req.params.isApproved,
			});
			res.status(202).json(Count);
		} catch (error) {
			res.status(409).json({ message: error.message });
		}
	}
};
const GetNoticeByYear = async (req, res) => {
	if (req.params.year) {
		//console.log(req.params.month);
		try {
			const notices = await notice.find();
			let count= new Array();
			const yearlyCount = notices.filter((notice) => {

				return req.params.year == new Date(notice.createdAt).getFullYear();
				
				});
			for (let i = 1; i <= 12; i++) {
				const monthycount =yearlyCount.filter((notice) => {
					return i == new Date(notice.createdAt).getMonth() + 1;
				})

				count[i] = monthycount.length;
			}
		

			res.status(200).json( count);
		} catch (error) {
			res.status(409).json({ message: error.message });
		}
	}
};


const getbyDateNotice = async (req, res) => {
	if(req.params.date ) { 
		try {

			const notices = await notice.find({ isApproved:'Approved'});
			
			const foundate = notices.filter((notice) => {
			
			return ((req.params.date == new Date(notice.tobePost).getUTCDate()) && (req.params.month == new Date(notice.tobePost).getUTCMonth()) && (req.params.year == new Date(notice.tobePost).getUTCFullYear()));
			
			})
		
		res.status(200).json(foundate);
		} catch (error) {
			res.status(409).json({ message: error.message });
		}
	}
}
const getNoticeById = async (req, res) => {
	
	if (req.params.id) {
		try {
			const found_notice = await notice.findById(req.params.id);

			res.status(200).json({ notice: found_notice });
		} catch (error) {
			res.status(409).json({ message: error.message });
		}
	} else {
		response.status(406).json({ message: "request parameters are empty" });
	}
};


const UpdateOneNotice = async (req, res) => {
	if (req.params.id) {
		try {
			const update = await notice.findByIdAndUpdate(req.params.id, {
				$set: { topic: req.body.topic, content: req.body.content },
			});
			res.status(202).json({ notice: update });
		} catch (error) {
			res.status(409).json({ message: error.message });
		}
	}
};

const DeleteOneNotice = async (req, res) => {
	if (req.params.id) {
		console.log(req.params.id);
		try {
			const delete_notice = await notice.findByIdAndDelete(req.params.id);
			res.status(200).json({ notice: delete_notice });
		} catch (error) {
			res.status(409).json({ message: error.message });
		}
	}
};

module.exports = {
	GetAllNotices,
	CreateNotice,
	GetByapproval,
	getNoticeById,
	UpdateOneNotice,
	DeleteOneNotice,
	GetNoticeByYear,
	getbyDateNotice
};
