import mongoose from "mongoose";

const connectToMongoDB = async () => {
	try {
		await mongoose.connect("mongodb+srv://samreenjahan627:xe4dG1HbnCDK0W6g@cluster0.89xh5.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
		console.log("Connected to MongoDB");
	} catch (error) {
		console.log("Error connecting to MongoDB", error.message);
	}
};

export default connectToMongoDB;
