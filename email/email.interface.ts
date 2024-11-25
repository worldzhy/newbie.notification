enum EmailTemplate {
  AuthApproveSubnet = 'auth/approve-subnet',
  AuthEmailVerification = 'auth/email-verification',
  AuthEnableEmailMfa = 'auth/enable-email-mfa',
  AuthLoginLink = 'auth/login-link',
  AuthPasswordReset = 'auth/password-reset',
  AuthResendEmailVerification = 'auth/resend-email-verification',
  AuthUsedBackupCode = 'auth/used-backup-code',
  AuthVerificationCode = 'auth/verification-code',
  TeamsInvitation = 'teams/invitation',
  UsersDeactivated = 'users/deactivated',
  UsersMergeRequest = 'users/merge-request',
  UsersPasswordChanged = 'users/password-changed',
}

export interface EmailParams {
  toAddress: string;
  subject?: string;
  plainText?: string;
  html?: string;
}

export interface EmailParamsWithTemplate {
  toAddress: string;
  template: {
    [EmailTemplate.AuthApproveSubnet]?: {
      userName: string;
      locationName: string;
      link: string;
      linkValidMinutes: number;
    };
    [EmailTemplate.AuthEmailVerification]?: {
      userName: string;
      link: string;
      linkValidDays: number;
    };
    [EmailTemplate.AuthEnableEmailMfa]?: {
      userName: string;
      code: string;
    };
    [EmailTemplate.AuthLoginLink]?: {
      userName: string;
      link: string;
      linkValidDays: number;
    };
    [EmailTemplate.AuthPasswordReset]?: {
      userName: string;
      link: string;
      linkValidMinutes: number;
    };
    [EmailTemplate.AuthResendEmailVerification]?: {
      userName: string;
      link: string;
      linkValidDays: number;
    };
    [EmailTemplate.AuthUsedBackupCode]?: {
      userName: string;
      locationName: string;
      link: string;
    };
    [EmailTemplate.AuthVerificationCode]?: {
      userName: string;
      code: string;
      codeValidMinutes: number;
    };
    [EmailTemplate.TeamsInvitation]?: {
      userName: string;
      teamName: string;
      link: string;
    };
    [EmailTemplate.UsersDeactivated]?: {
      userName: string;
    };
    [EmailTemplate.UsersMergeRequest]?: {
      userName: string;
      link: string;
      linkValidMinutes: number;
    };
    [EmailTemplate.UsersPasswordChanged]?: {
      userName: string;
    };
  };
}
