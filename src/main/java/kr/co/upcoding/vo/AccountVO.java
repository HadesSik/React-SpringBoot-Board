package kr.co.upcoding.vo;

public class AccountVO {
    int uId;
    String userId;
    String userName;
    String password;

    public int getUserId() {
        return uId;
    }

    public void setUserId(String userId) {
        this.userId = userId;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public void setUId(int uId) {
        this.uId = uId;
    }
}
