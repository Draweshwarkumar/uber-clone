const captainModel = require('../models/captain.models');

module.exports.createCaptain = async ({
    firstname, lastname, email, password, color, plate, capacity, vehicleType
}) => {
    // Validate required fields
    if (!firstname || !email || !password || !color || !plate || !capacity || !vehicleType) {
        throw new Error('All fields are required');
    }

    // Create captain document
    const captain = await captainModel.create({
        fullname: {
            firstname,
            lastname,
        },
        email,
        password,
        vehicle: {
            color,
            plate,
            capacity,
            vehicleType,
        },
    });

    // Return the created captain document
    return captain;
};
