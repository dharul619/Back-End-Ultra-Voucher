const query =
  "SELECT n1.id, n1.name, n2.name AS parent_name FROM table_people n1 LEFT JOIN table_people n2 on n1.parent_id = n2.id;";
