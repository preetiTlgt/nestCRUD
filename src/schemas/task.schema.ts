import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import {TaskStatus} from '../tasks/tasks-status';

export type TaskDocument = HydratedDocument<Task>;

@Schema()
export class Task {
  @Prop({
    type: String,
    required: true
  })
  title: string;

  @Prop({
    type: String,
    required: false
  })
  description: string;

  @Prop({
    type: String,
    required: true,
    enum: [TaskStatus.DONE, TaskStatus.IN_PROGRESS, TaskStatus.OPEN],
  })
  status: string;
}

export const TaskSchema = SchemaFactory.createForClass(Task);