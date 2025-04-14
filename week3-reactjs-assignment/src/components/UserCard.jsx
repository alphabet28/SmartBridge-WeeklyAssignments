const UserCard = ({ name, email }) => {
    return (
      <div className="bg-white shadow-md rounded-xl p-6 m-4 border">
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="text-gray-600">{email}</p>
      </div>
    );
  };
  
  export default UserCard;
  