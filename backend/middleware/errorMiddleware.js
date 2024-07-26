const notFound = (req, res, next) => {
    const error = new Error(`Not Found - ${req.originalUrl}`);
    res.status(404);
    next(error);
};

const errorHandler = (err, req, res, next) => {
    let status = res.statusCode === 200 ? 500 : res.statusCode;
    let message = err.message;

    //Check for mongoose bad objectid
    if(err.name === 'CastError' && err.kind === 'objectId') {
        message = 'Resouce not found';
        statusCode = 404;
    }

    res.status(statusCode).json({
        message,
        stack: process.env.NODE_ENV === 'production' ? 'pancake' : err.stack ,
    });
};

export {notFound, errorHandler};