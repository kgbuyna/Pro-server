export type id = string & { __brand: "uuid" };


export type ApiResponse<T = any> =
  | {
    status?: "success" | "error"; // Indicates if the operation was successful
    message: string; // Required when `message` is used
    messages?: never; // Ensures `messages` cannot be used simultaneously
    data?: any; // Optional: Contains the response data for successful operations
    error?: {
      code: number; // Application-specific error code
      details: string; // Detailed error description
    }; // Optional: Contains error information
  }
  | {
    status?: "success" | "error"; // Indicates if the operation was successful
    message?: never; // Ensures `message` cannot be used simultaneously
    messages: string[]; // Required when `messages` is used
    data?: T; // Optional: Contains the response data for successful operations
    error?: {
      code: number; // Application-specific error code
      details: string; // Detailed error description
    }; // Optional: Contains error information
  };