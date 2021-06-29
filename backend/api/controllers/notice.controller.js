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
	console.log(req.body);
	const newNotice = await new notice(req.body);

	try {
		await newNotice.save();
		console.log(newNotice);
		res.status(201).json(newNotice);
	} catch (error) {
		res.status(409).json({ message: error.message });
	}
};

const GetByapproval = async (req, res) => {
	console.log(req.params.isApproved);
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
const GetNoticeByMonth = async (req, res) => {
	if (req.params.month) {
		//console.log(req.params.month);
		try {
			const notices = await notice.find();

			const monthlyCount = notices.filter((notice) => {
				//console.log(new Date(notice.createdAt).getMonth()+1);
				return req.params.month == new Date(notice.createdAt).getMonth()+1;
			});

			console.log(monthlyCount);

			res.status(200).json({ monthlyCount: monthlyCount.length });
		} catch (error) {
			res.status(409).json({ message: error.message });
		}
	}
};
const getNoticeById = async (req, res) => {
	console.log(req.params.id);
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
	GetNoticeByMonth,
};
