ALTER TABLE kie_tasks ADD COLUMN kie_task_id TEXT;
UPDATE kie_tasks SET kie_task_id = task_id WHERE kie_task_id IS NULL;
CREATE INDEX kie_tasks_kie_task_id_idx ON kie_tasks (kie_task_id) WHERE kie_task_id IS NOT NULL;
