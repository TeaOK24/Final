class ApiError extends Error {

    constructor(status, message) {
        super();
        this.status = this.status
        this.message = this.message

    }

    static badRequest(massage) {
        return new ApiError(404, massage)
    }

    static internal(massage) {
        return new ApiError(500, massage)
    }

    static forbidden(massage) {
        return new ApiError(403, massage)
    }
}

export default ApiError