const Candiadat = require('../Model/Candiadat');
const Candidat = require('../Model/Candiadat');


exports.create = async (req,res)=>{
    const {filename} = req.file;
	const { name,cv,program,count_like,count_unlike } = req.body;

    try {
		const candidatExist = await Candidat.findOne({ name });
		if (candidatExist) {
			return res.status(400).json({
				errorMessage: `${name} already exists`,
			});
		}

		let newCandidat = new Candidat();
		newCandidat.image = filename;
		newCandidat.name = name;
		newCandidat.cv= cv;
        newCandidat.program = program;
        newCandidat.count_like= count_like;
        newCandidat.count_unlike = count_unlike;

		newCandidat = await newCandidat.save();

		res.status(200).json({
			name : newCandidat,
			successMessage: `${newCandidat.name} was created!`,
		});
	}catch(err){
        console.log('candidat create error',err);
        res.status(500).json({
            errorMessage: "Please try again later",
        })
    }
}

exports.readAll = async (req, res) => {
	try {
		const candidats = await Candiadat.find({});

		res.status(200).json({
			candidats,
		});
	} catch (err) {
		console.log('candidat readAll error: ', err);
		res.status(500).json({
			errorMessage: 'Please try again later',
		});
	}
};