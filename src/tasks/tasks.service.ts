import { Model, Types } from 'mongoose';
import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Task, TaskDocument } from '../schemas/task.schema';
import { CreateTaskDto } from '../dto/create-task.dto';
import { UpdateTaskDto } from '../dto/update-task.dto';

@Injectable()
export class TasksService {
  constructor(@InjectModel(Task.name) private taskModel: Model<TaskDocument>) {}

  async create(createTaskDto: CreateTaskDto): Promise<Task> {
    const createdTask = new this.taskModel(createTaskDto);
    return await createdTask.save();
  }

  async update(id: string, updateTask: UpdateTaskDto): Promise<Task> {
    const updatedObj = await this.taskModel.findOneAndUpdate({_id: new Types.ObjectId(id)}, {
        ...updateTask
    });
    if (!updatedObj) {
        throw new NotFoundException();
    }
    return {
        ...updatedObj["_doc"],
        ...updateTask
    };
  }

  async delete(id: string): Promise<any> {
    return await this.taskModel.deleteOne({
        _id: new Types.ObjectId(id),
    }).exec();
  }

  async findAll(): Promise<Task[]> {
    return await this.taskModel.find().exec();
  }

  async findById(id: string): Promise<Task> {
    const taskObj = await this.taskModel.findById(id).exec();
    if (!taskObj) {
        throw new NotFoundException();
    }
    return taskObj;
  }
}
