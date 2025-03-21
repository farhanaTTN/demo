const getUserName = require('../api/v1/controllers/user.js');
const userservice = require('../api/v1/services/user.js');

describe('user test case', () => {
    const mockRequest = {};
    const mockResponse = {};
    
    describe('get user name', () => {
        it('should return user name', async () => {
            mockRequest.body = {
                userId: "anh"
            };
            mockResponse.status = jest.fn().mockReturnValue(mockResponse);
            mockResponse.json = jest.fn().mockReturnValue(mockResponse);

            const serviceSpy = jest.spyOn(userservice, 'getUserbyId')
            .mockImplementation()
            .mockResolvedValue("dummy_name");

            await getUserName(mockRequest, mockResponse);

            expect(mockResponse.status).toHaveBeenCalledWith(200);
            expect(mockResponse.json).toHaveBeenCalledWith({
                Username: 'dummy_name'
            });
            expect(serviceSpy).toHaveBeenCalled();
        });
    });
});