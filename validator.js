const { body, validationResult } = require('express-validator')
const userValidationRules = (method) => {
	switch (method) {
		case 'login': {
			return [
				body('mobileNo').isLength({ min: 3 }),
				body('password').isLength({ min: 2 }),
			]
		}
		case 'add-vendor':{
			return [
				body('firstName').exists(),
				body('lastName').exists(),
				body('email').isEmail(),
				body('email').exists(),
				body('mobileNo').exists(),
				body('city').exists(),
				body('stateName').exists(),
				body('country').exists(),
				body('address').exists(),
				body('password').isLength({ min: 5 })
			]
		}
		case 'validateOTP':{
			return [
				body('id').isNumeric(),
				body('otp').isLength({ min: 4 })
			]
		}
		case 'add-to-cart':{
			return[
				body('event_id').exists(),
				body('item_id').exists(),
				body('quantity').exists(),
				body('topping_id').exists(),
				body('item_size_id').exists(),
				body('offer_id').exists(),
				body('is_allergic').exists(),
				body('status').exists(),
				body('vendor_id').exists()
			]
		}
		case 'update-view-cart':{
			return[
				body('cart_item_id').exists(),
				body('quantity').exists(),
				body('topping_id').exists(),
				body('item_size_id').exists(),
				body('offer_id').exists(),
				body('is_allergic').exists(),
				body('status').exists(),
				body('vendor_id').exists()
			]
		}
		
	}
	
}

const validate = (req, res, next) => {
	const errors = validationResult(req)
	if (errors.isEmpty()) {
		return next()
	}
	const extractedErrors = []
	errors.array().map(err => extractedErrors.push({ [err.param]: err.msg }))

	return res.status(422).json({
		errors: extractedErrors,
	})
}

module.exports = {
	userValidationRules,
	validate,
}