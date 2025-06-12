export class MySdk{
    constructor() {
        console.log('MySdk initialized');
    }
    
    greet(name: string): string {
        return `Hello, ${name}!`;
    }

    login_with_sdk(username: string, password: string): boolean {
        if (username === 'vicky' && password === 'vicky123') {
            console.log('Login successful');
            return true;
        } else {
            console.log('Login failed');
            return false;
        }
    }
    logout_with_sdk(): void {
        console.log('Logged out successfully');
    }

    fetchData(endpoint: string): Promise<any> {
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                if (endpoint === '/data') {
                    resolve({ data: 'Sample data from ' + endpoint });
                } else {
                    reject(new Error('Invalid endpoint'));
                }
            }, 1000);
        });
    }
}