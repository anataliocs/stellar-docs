import type { SidebarsConfig } from "@docusaurus/plugin-content-docs";

const sidebar: SidebarsConfig = {
  apisidebar: [
    {
      type: "doc",
      id: "stellar-disbursement-platform/api-reference/resources/stellar-disbursement-platform-api",
    },
    {
      type: "category",
      label: "Authentication",
      items: [
        {
          type: "doc",
          id: "stellar-disbursement-platform/api-reference/resources/log-in",
          label: "Log In",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "stellar-disbursement-platform/api-reference/resources/refresh-token",
          label: "Refresh Token",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "stellar-disbursement-platform/api-reference/resources/authenticate-mfa",
          label: "Provide Multi-Factor Authentication",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "stellar-disbursement-platform/api-reference/resources/forgot-password",
          label: "Forgot Password",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "stellar-disbursement-platform/api-reference/resources/reset-password",
          label: "Reset Rassword",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Disbursements",
      items: [
        {
          type: "doc",
          id: "stellar-disbursement-platform/api-reference/resources/list-all-disbursements",
          label: "List All Disbursements",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "stellar-disbursement-platform/api-reference/resources/create-disbursement",
          label: "Create Disbursement",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "stellar-disbursement-platform/api-reference/resources/retrieve-a-disbursement",
          label: "Retrieve a Disbursement",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "stellar-disbursement-platform/api-reference/resources/list-all-disbursement-receivers",
          label: "List All Disbursement Receivers",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "stellar-disbursement-platform/api-reference/resources/upload-disbursement-instructions",
          label: "Upload Disbursement Instructions",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "stellar-disbursement-platform/api-reference/resources/download-disbursement-instructions",
          label: "Download Disbursement Instructions",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "stellar-disbursement-platform/api-reference/resources/update-a-disbursement-status",
          label: "Update a Disbursement Status",
          className: "api-method patch",
        },
      ],
    },
    {
      type: "category",
      label: "Payments",
      items: [
        {
          type: "doc",
          id: "stellar-disbursement-platform/api-reference/resources/list-all-payments",
          label: "List All Payments",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "stellar-disbursement-platform/api-reference/resources/retrieve-a-payment",
          label: "Retrieve a Payment",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Receivers",
      items: [
        {
          type: "doc",
          id: "stellar-disbursement-platform/api-reference/resources/list-all-receivers",
          label: "List All Receivers",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "stellar-disbursement-platform/api-reference/resources/retrieve-a-receiver",
          label: "Retrieve a Receiver",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "stellar-disbursement-platform/api-reference/resources/update-a-receiver",
          label: "Update a Receiver",
          className: "api-method patch",
        },
      ],
    },
    {
      type: "category",
      label: "Statistics",
      items: [
        {
          type: "doc",
          id: "stellar-disbursement-platform/api-reference/resources/retrieve-all-statistics",
          label: "Retrieve All Statistics",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "stellar-disbursement-platform/api-reference/resources/retrieve-disbursement-statistics",
          label: "Retrieve Disbursement Statistics",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Registration",
      items: [
        {
          type: "doc",
          id: "stellar-disbursement-platform/api-reference/resources/start-wallet-registration",
          label: "Start Wallet Registration",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "stellar-disbursement-platform/api-reference/resources/send-one-time-passcode",
          label: "Send One-Time Passcode",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "stellar-disbursement-platform/api-reference/resources/verify-receiver-registration",
          label: "Verify Receiver Registration",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "stellar-disbursement-platform/api-reference/resources/retrieve-stellar-info-file",
          label: "Retrieve Stellar Info File",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "stellar-disbursement-platform/api-reference/resources/request-challenge-transaction",
          label: "Request Challenge Transaction",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "stellar-disbursement-platform/api-reference/resources/provide-signed-challenge-transaction",
          label: "Provide Signed Challenge Transaction",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "stellar-disbursement-platform/api-reference/resources/request-registration-url",
          label: "Request Registration URL",
          className: "api-method post",
        },
      ],
    },
    {
      type: "category",
      label: "Profile",
      items: [
        {
          type: "doc",
          id: "stellar-disbursement-platform/api-reference/resources/get-profile",
          label: "Get Profile",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "stellar-disbursement-platform/api-reference/resources/update-user-profile",
          label: "Update User Profile",
          className: "api-method patch",
        },
      ],
    },
    {
      type: "category",
      label: "Organization",
      items: [
        {
          type: "doc",
          id: "stellar-disbursement-platform/api-reference/resources/get-organization-info",
          label: "Get Organization Info",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "stellar-disbursement-platform/api-reference/resources/update-organization-profile",
          label: "Update Organization Profile",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "stellar-disbursement-platform/api-reference/resources/get-organization-logo",
          label: "Retrieve Organization Logo",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "stellar-disbursement-platform/api-reference/resources/get-all-countries",
          label: "Get All Countries",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "stellar-disbursement-platform/api-reference/resources/get-all-assets",
          label: "Get All Assets",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "stellar-disbursement-platform/api-reference/resources/create-asset",
          label: "Create Asset",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "stellar-disbursement-platform/api-reference/resources/delete-asset",
          label: "Delete Asset",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "stellar-disbursement-platform/api-reference/resources/get-all-wallets",
          label: "Get All Wallets",
          className: "api-method get",
        },
      ],
    },
    {
      type: "category",
      label: "Users",
      items: [
        {
          type: "doc",
          id: "stellar-disbursement-platform/api-reference/resources/get-all-users",
          label: "Get All Users",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "stellar-disbursement-platform/api-reference/resources/create-user",
          label: "Create User",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "stellar-disbursement-platform/api-reference/resources/update-user-activation-status",
          label: "Update User Activation Status",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "stellar-disbursement-platform/api-reference/resources/get-all-roles",
          label: "Get All Roles",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "stellar-disbursement-platform/api-reference/resources/update-user-role",
          label: "Update User Role",
          className: "api-method patch",
        },
      ],
    },
    {
      type: "category",
      label: "Admin",
      items: [
        {
          type: "doc",
          id: "stellar-disbursement-platform/api-reference/resources/get-all-tenants",
          label: "Get All Tenants",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "stellar-disbursement-platform/api-reference/resources/create-tenant",
          label: "Create Tenant",
          className: "api-method post",
        },
        {
          type: "doc",
          id: "stellar-disbursement-platform/api-reference/resources/retrieve-a-tenant",
          label: "Retrieve a Tenant",
          className: "api-method get",
        },
        {
          type: "doc",
          id: "stellar-disbursement-platform/api-reference/resources/soft-delete-a-tenant",
          label: "Soft delete a Tenant",
          className: "api-method delete",
        },
        {
          type: "doc",
          id: "stellar-disbursement-platform/api-reference/resources/update-a-tenant",
          label: "Update a Tenant",
          className: "api-method patch",
        },
        {
          type: "doc",
          id: "stellar-disbursement-platform/api-reference/resources/default-tenant",
          label: "Default Tenant",
          className: "api-method post",
        },
      ],
    },
  ],
};

export default sidebar.apisidebar;
