const User = require("../models/User");
const Booking = require("../models/Booking");
const ParkingLot = require("../models/ParkingLot"); // Ensure ParkingLot is imported

exports.getProfile = async (req, res) => {
  console.log("Session userId before fetching profile:", req.session.userId);

  // Check if user is authenticated
  if (!req.session.userId) {
    return res.redirect("/login"); // Redirect to login if not authenticated
  }

  try {
    // Fetch the logged-in user's information
    const user = await User.findByPk(req.session.userId, {
      attributes: ["id", "username", "email", "balance"], // Include 'id' to access it later
    });

    // If the user is not found, redirect to login
    if (!user) {
      return res.redirect("/login");
    }

    // Fetch the user's booking history
    console.log("User ID for booking query:", user.id);
    const recentBookings = await Booking.findAll({
      where: { userId: user.id }, // Use user.id here directly
      // include: [
      //     {
      //         model: ParkingLot,
      //         attributes: ['name'],
      //     },
      // ],
      order: [["createdAt", "DESC"]],
    });
    // Calculate total amount and total duration
    const totalAmountPaid = recentBookings.reduce(
      (sum, booking) => sum + booking.totalCost,
      0
    );
    const totalDuration = recentBookings.reduce(
      (sum, booking) => sum + booking.duration,
      0
    );

   
    // Log booking history for debugging
    console.log("Booking history:", recentBookings);

    // Render the profile view with user and bookings data
    res.render("profile", {
        user,
        recentBookings,
        totalAmountPaid,
        totalDuration,
      });
  } catch (error) {
    // Enhanced error logging
    console.error("Error fetching profile:", error);
    res.status(500).send("An error occurred while retrieving the profile.");
  }
};
