import { Identifiable } from "./identifiable";

export class WorkflowDefinition extends Identifiable {
    workflow_id: string;
    executor_id: string;
    workflowName: string;
    workflowDefinition: string;
}