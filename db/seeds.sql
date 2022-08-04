INSERT INTO employees
    (first_name, last_name, role_, manager)
VALUES
    ('James', 'Fraser', 'Sales Lead'),
    ('Bob', 'London', 'Salesperson'),
    ('Derek', 'Smith','Lead Engineer'),
    ('Monica', 'Cooper', 'Engineer'),
    ('Alex', 'Dryden', 'Account Lead'),
    ('Heather', 'Lupine', 'Accountant');


INSERT INTO roles
    (job_title, salary, dept_id)
VALUES
    ('Sales Lead', 1000, 1),
    ('Sales Person', 700, 1),
    ('Lead Engineer', 700, 2),
    ('Engineer', 500, 2),
    ('Account Lead', 1000, 3),
    ('Accountant', 500, 3);

INSERT INTO departments
    (department)
VALUES
    ('Sales'),
    ('Engineering'),
    ('Accounting');
