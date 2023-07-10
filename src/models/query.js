

const createTodo = async (pool , description) => {
   return await pool.query("INSERT INTO todo (description) VALUES($1) RETURNING *" , [description]);
}

module.exports = {
    createTodo
};