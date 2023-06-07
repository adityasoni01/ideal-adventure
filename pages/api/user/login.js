import connectMongo from "@/utils/connect";
import User from "@/models/userModel";
const checkPassword = async (candidatePassword, userPassword) => {
    if (candidatePassword === userPassword) return true;
  return false;
};

const AppError = (res, msg) => {
  res.status(401).json({
    status: 'error',
    message: msg,
  });
};

// login the user provided with correct credentials
export default async function login(req, res) {
    
   await connectMongo();
  const { email, password } = req.body;
  // check user has email and password
//   if (!email || !password)
//     return AppError(res, 'Please Provide email and password');
    try {
        // Fetch user with matching email and password from MongoDB
        const user = await User.findOne({ email, password });
    
        if (!user) {
          res.status(404).send('User not found');
          return;
        }
    
        // Send response with user object
        res.status(200).json({status : "success",data: user});
      } catch (err) {
        res.status(500).send(err);
      }
    // User.findOne({ email, password }), (err, user) => {
    //     if (err) {
    //       res.status(500).send(err);
    //       return;
    //     }
    
    //     if (!user) {
    //       res.status(401).send('Invalid email or password');
    //       return;
    //     }
    // }
  // getting user (if any) based on email
//   const query = `MATCH(u:User {email:$email}) return u`;
//   // parameter used in query
//   const params = { email };
//   // run the query on database
//   const result = await executeRead(query, params);
//   // if no result return error
//   if (result.length === 0) return AppError(res, 'Invalid Email or Password');
//   // get user from data
//   const user = result[0].get('u').properties;
//   // check if provided password is corrct or not
//   if (!(await checkPassword(password, user.password)))
//     return AppError(res, 'Invalid email or Password');

//   // valid user, send token
//   res.status(200).json({
//     status: 'success',
//     data: { user },
//   });
}





// export const getServerSideProps = async()=>{
//     try{
//         const {name,email,phone,address,password} = req.body;
//         console.log(req.body);
//         console.log("Connecting to Mongo");
//         await connectMongo();
//         console.log("Connected to Mongo");
    
    
//         console.log("Fetching Document");
//         const user = await User.find
//         // const user = await User.create({name,email,phone,address,password});
//         console.log("Fetched Document");
//         return{
//             props: {
//                 user: JSON.parse(JSON.stringify(user))
//             }
//         }
//         }
//         catch(error){
//             console.log(error)
//             return{
//                 notFound: true
//         }
// }