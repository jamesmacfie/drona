import { getSettings } from '../../shared/settings';

export const drone = {
	flying: 0,
	videoEnabled: 0,
	visionEnabled: 0,
	controlAlgorithm: 0,
	altitudeControlAlgorithm: 0,
	startButtonState: 0,
	controlCommandAck: 0,
	cameraReady: 0,
	travellingEnabled: 0,
	usbReady: 0,
	navdataDemo: 0,
	navdataBootstrap: 0,
	motorProblem: 0,
	communicationLost: 0,
	softwareFault: 0,
	lowBattery: 0,
	userEmergencyLanding: 0,
	timerElapsed: 0,
	MagnometerNeedsCalibration: 0,
	anglesOutOfRange: 0,
	tooMuchWind: 0,
	ultrasonicSensorDeaf: 0,
	cutoutDetected: 0,
	picVersionNumberOk: 0,
	atCodecThreadOn: 0,
	navdataThreadOn: 0,
	videoThreadOn: 0,
	acquisitionThreadOn: 0,
	controlWatchdogDelay: 0,
	adcWatchdogDelay: 0,
	comWatchdogProblem: 0,
	emergencyLanding: 0,
	demo: {
		controlState: null,
		flyState: null,
		batteryPercentage: 100,
		rotation: {
			frontBack: 0,
			pitch: 0,
			theta: 0,
			y: 0,
			leftRight: 0,
			roll: 0,
			phi: 0,
			x: 0,
			clockwise: 0,
			yaw: 0,
			psi: 0,
			z: 0
		},
		frontBackDegrees: 0,
		leftRightDegrees: 0,
		clockwiseDegrees: 0,
		altitude: 0,
		altitudeMeters: 0,
		velocity: {
			x: 0,
			y: 0,
			z: 0
		},
		xVelocity: 0,
		yVelocity: 0,
		zVelocity: 0
	}
};

export const video = {
	connected: false,
	error: null
};

export const settings = getSettings();
