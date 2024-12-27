// Middleware to check if user is an admin  
const isAdmin = (req, res, next) => {  
    if (req.session.user && req.session.user.role === 'admin') {  
        return next();  
    }  
    return res.status(403).send('You do not have permission to access this resource.');  
};  

// Use the middleware in your routes  
router.get('/admin/manage-parking-lots', isAdmin, manageParkingLots);  
router.post('/admin/deduct-spot', isAdmin, deductSpot);  
router.post('/admin/deduct-motorcycle-spot', isAdmin, deductMotorcycleSpot);