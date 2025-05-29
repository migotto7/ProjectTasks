const Task = require('../models/taskModel');

exports.createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body);
        res.status(201).json(task);
    } catch (err) {
        res.status(400).json({error: err.message});
    }
}

exports.getTasks = async (req, res) => {
    try{
        const tasks = await Task.find();
        res.json(tasks);
    }catch (err) {
        res.status(500).json({error: err.message});
    }
}

exports.getTaskById = async (req, res) => {
    try{
        const task = await Task.findById(req.params.id);
        if(!task){
            return res.status(404).json({message: "Task not found"});
        }
        res.json(task);
    } catch(err) {
        res.status(500).json({error: err.message});
    }
}

exports.updateTask = async (req, res) => {
    try{
        const task = await Task.findByIdAndUpdate(req.params.id, req.body, {new: true});
        if(!task) return res.status(404).json({message: "Task not found"});
        res.json(task);
    } catch(err) {
        res.status(400).json({error: err.message});
    }
}

exports.deleteTask = async (req, res) => {
    try{
        const task = await Task.findByIdAndDelete(req.params.id);
        if(!task) return res.status(404).json({message: "Task not found"});
        res.json(task);
    } catch(err) {
        res.status(500).json({error: err.message});
    }
}