import { Controller, Get, Post, Delete, Patch, Param, Body, Put } from '@nestjs/common';
import { TasksService } from './tasks.service';
import {TaskStatus} from './tasks-status';
import mongoose from 'mongoose';
import { Prop } from '@nestjs/mongoose';
import { Task } from '../schemas/task.schema';
import { CreateTaskDto } from 'src/dto/create-task.dto';

@Controller('tasks')
export class TasksController {
    @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Task' })
    tasks: Task[];
    constructor(private taskService: TasksService){}
    @Get()
    getAllTasks(): Promise<Task[]>{
        return this.taskService.findAll();
    }

    @Get(":id")
    getTaskById(@Param('id') id: string): Promise<Task>{
        return this.taskService.findById(id);
    }

    @Post()
    createTask(
        @Body('title') title:string,
        @Body('description') description:string,
        @Body('status') status:TaskStatus
    ):Promise<Task>{
        const task: CreateTaskDto = {title, description, status};
        return this.taskService.create(task);
    }

    @Delete(':id')
    deleteTask(@Param('id') id: string){
        this.taskService.delete(id);
        return `Task ${id} has been deleted`;
    }

    @Put(':id')
    updateTaskStatus(
        @Param('id') id:string,
        @Body() task){
        console.log(task);
        return this.taskService.update(id, task);
    }
}

