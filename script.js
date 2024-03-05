

show dbs
use data_salaries
db.salaries.find().limit(5)



db.salaries.find().count()
db.salaries.distinct("experience_level")
db.salaries.distinct("employment_type")
db.salaries.distinct("company_location")
db.salaries.distinct("company_location").length
db.salaries.distinct("job_title").lenght
db.salaries.distinct("job_title")



db.salaries.updateMany({}, [{ $set: { salary: { $toInt: "$salary" }, salary_in_usd: { $toInt: "$salary_in_usd" }, work_year: { $toInt: "$work_year" } } }])

db.salaries.findOne()



db.salaries.find({ employment_type: 'FT', remote_ratio: 100, experience_level: 'EN' }, { salary_in_usd: 1, job_title: 1, company_location: 1, _id: 0 }).sort({ salary_in_usd: 1 }).limit(5)



db.salaries.find({ employment_type: 'FT', experience_level: 'EN', company_location: 'ES' }, { salary_in_usd: 1, job_title: 1, company_location: 1, _id: 0 }).sort({ salary_in_usd: -1 })



db.salaries.aggregate([{ $group: { _id: "$work_year", avgSalary: { $avg: "$salary_in_usd" } } }, { $sort: { _id: 1 } }])



db.salaries.aggregate([{ $group: { _id: "$experience_level", maxSalary: { $max: "$salary_in_usd" }, minSalary: { $min: "$salary_in_usd" } } }])



db.salaries.deleteOne({ experience_level: 'EN', salary_in_usd: 615201 })



db.salaries.aggregate([{ $group: { _id: "$company_location", avgSalary: { $avg: "$salary_in_usd" }, count: { $sum: 1 } } }, { $sort: { avgSalary: -1 } }])



db.salaries.aggregate([{ $group: { _id: "$experience_level", totalSalary: { $sum: "$salary_in_usd" } } }])



db.salaries.aggregate([{ $match: { experience_level: 'EN', employment_type: 'FT', remote_ratio: 100 } }, { $group: { _id: null, avgSalary: { $avg: "$salary_in_usd" } } }])



db.salaries.aggregate([{ $bucket: { groupBy: "$salary_in_usd", boundaries: [0, 20000, 50000, 100000, 150000, 200000, 300000, 400000, 500000], output: { count: { $sum: 1 } } } }])



db.salaries.aggregate([{ $group: { _id: "$experience_level", avgSalary: { $avg: "$salary_in_usd" }, maxSalary: { $max: "$salary_in_usd" } } }, { $project: { _id: 1, avgSalary: 1, maxSalary: 1, percentageOfMax: { $multiply: [{ $divide: ["$avgSalary", "$maxSalary"] }, 100] } } }])



db.salaries.insertOne({ work_year: '2023', experience_level: 'MI', employment_type: 'FT', job_title: 'Data Analyst', salary: '75000', salary_currency: 'USD', salary_in_usd: '75000', employee_residence: 'US', remote_ratio: 0, company_location: 'US', company_size: 'M' })



db.salaries.insertMany([{ work_year: '2023', experience_level: 'MI', employment_type: 'FT', job_title: 'Data Analyst', salary: '75000', salary_currency: 'USD', salary_in_usd: '75000', employee_residence: 'US', remote_ratio: 0, company_location: 'US', company_size: 'M' }, { work_year: '2023', experience_level: 'SE', employment_type: 'FT', job_title: 'Machine Learning Engineer', salary: '100000', salary_currency: 'USD', salary_in_usd: '100000', employee_residence: 'US', remote_ratio: 1, company_location: 'US', company_size: 'L' }, { work_year: '2023', experience_level: 'EN', employment_type: 'FT', job_title: 'Software Developer', salary: '85000', salary_currency: 'USD', salary_in_usd: '85000', employee_residence: 'US', remote_ratio: 1, company_location: 'US', company_size: 'M' }])

