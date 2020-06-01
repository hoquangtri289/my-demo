const API_Coudinary = require('./API_Coudinay');

class API_Server {
    async getList(Database, req, res) {
        console.log(req.baseUrl, req.query);
        let originalUrl = req.baseUrl.slice(1);
        let filter = JSON.parse(req.query.filter);

        let range = req.query.range.match(/\d+/g);
        let lm = range[1] - +range[0] + 1;
        let n = range[0];
        let [key, val] = req.query.sort.match(/\w+/g);

        let count = await Database.countDocuments();
        let value = await `${originalUrl} ${range[0]}-${range[1]}/${count}`;
        await res.set({
            'Access-Control-Expose-Headers': 'Content-Range',
            'Content-Range': value
        });
        let data = await Database.find(filter).limit(parseInt(lm)).skip(parseInt(n)).sort({[key]: val}); 
        return data;
    }

    async getOne(Database, req, res) {
        console.log(req.baseUrl, "getOne");
        let obj = req.params ? req.params : {};
        let data = await Database.findOne(obj)
        return data;
    }

    async create(Database, dataCreate) {
        console.log("create");
        let data = await new Database(dataCreate);
        await data.save();
        return data;
    }

    async update(Database, req, res){
        console.log(req.baseUrl, "update", req.body);
        
        let {oldAvatar} = req.body;
        if(oldAvatar){
            await API_Coudinary.deleteImg(oldAvatar);
        }

        let id = req.params._id;
        let body = req.body;
        let data = await Database.findOneAndUpdate({_id: id}, body, {new: true});
        console.log('put', data);
        return data;
    }
}

module.exports = new API_Server();