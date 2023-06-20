// File generated from our OpenAPI spec by Stainless.

import * as Core from '~/core';
import { APIResource } from '~/resource';
import { isRequestOptions } from '~/core';
import * as API from './';
import { Page, PageParams } from '~/pagination';

export class Documents extends APIResource {
  /**
   * Retrieve a Document
   */
  retrieve(documentId: string, options?: Core.RequestOptions): Promise<Core.APIResponse<Document>> {
    return this.get(`/documents/${documentId}`, options);
  }

  /**
   * List Documents
   */
  list(query?: DocumentListParams, options?: Core.RequestOptions): Core.PagePromise<DocumentsPage>;
  list(options?: Core.RequestOptions): Core.PagePromise<DocumentsPage>;
  list(
    query: DocumentListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<DocumentsPage> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this.getAPIList('/documents', DocumentsPage, { query, ...options });
  }
}

export class DocumentsPage extends Page<Document> {}

/**
 * Increase generates certain documents / forms automatically for your application;
 * they can be listed here. Currently the only supported document type is IRS Form
 * 1099-INT.
 */
export interface Document {
  /**
   * The type of document.
   */
  category:
    | 'account_opening_disclosures'
    | 'anti_money_laundering_policy'
    | 'anti_money_laundering_procedures'
    | 'audit_report'
    | 'background_checks'
    | 'business_continuity_plan'
    | 'collections_policy'
    | 'complaints_policy'
    | 'complaint_report'
    | 'compliance_report'
    | 'compliance_staffing_plan'
    | 'compliance_management_system_policy'
    | 'consumer_privacy_notice'
    | 'consumer_protection_policy'
    | 'corporate_formation_document'
    | 'credit_monitoring_report'
    | 'customer_information_program_policy'
    | 'electronic_funds_tranfer_act_policy'
    | 'employee_overview'
    | 'end_user_terms_of_service'
    | 'e_sign_policy'
    | 'financial_statement'
    | 'form_1099_int'
    | 'fraud_prevention_policy'
    | 'funds_availability_policy'
    | 'funds_availability_disclosure'
    | 'funds_flow_diagram'
    | 'gramm_leach_bliley_act_policy'
    | 'information_security_policy'
    | 'insurance_policy'
    | 'investor_presentation'
    | 'loan_application_processing_policy'
    | 'management_biography'
    | 'marketing_and_advertising_policy'
    | 'network_security_diagram'
    | 'onboarding_questionnaire'
    | 'penetration_test_report'
    | 'platform_compliance_metrics_submission'
    | 'consumer_platform_compliance_metrics_submission'
    | 'program_risk_assessment'
    | 'security_audit_report'
    | 'servicing_policy'
    | 'transaction_monitoring_report'
    | 'truth_in_savings_act_policy'
    | 'underwriting_policy'
    | 'vendor_list'
    | 'vendor_management_policy'
    | 'vendor_risk_management_report'
    | 'volume_forecast';

  /**
   * The [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) time at which the
   * Document was created.
   */
  created_at: string;

  /**
   * The identifier of the Entity the document was generated for.
   */
  entity_id: string | null;

  /**
   * The identifier of the File containing the Document's contents.
   */
  file_id: string;

  /**
   * The Document identifier.
   */
  id: string;

  /**
   * A constant representing the object's type. For this resource it will always be
   * `document`.
   */
  type: 'document';
}

export interface DocumentListParams extends PageParams {
  category?: DocumentListParams.Category;

  created_at?: DocumentListParams.CreatedAt;

  /**
   * Filter Documents to ones belonging to the specified Entity.
   */
  entity_id?: string;
}

export namespace DocumentListParams {
  export interface Category {
    /**
     * Filter Documents for those with the specified category or categories. For GET
     * requests, this should be encoded as a comma-delimited string, such as
     * `?in=one,two,three`.
     */
    in?: Array<
      | 'account_opening_disclosures'
      | 'anti_money_laundering_policy'
      | 'anti_money_laundering_procedures'
      | 'audit_report'
      | 'background_checks'
      | 'business_continuity_plan'
      | 'collections_policy'
      | 'complaints_policy'
      | 'complaint_report'
      | 'compliance_report'
      | 'compliance_staffing_plan'
      | 'compliance_management_system_policy'
      | 'consumer_privacy_notice'
      | 'consumer_protection_policy'
      | 'corporate_formation_document'
      | 'credit_monitoring_report'
      | 'customer_information_program_policy'
      | 'electronic_funds_tranfer_act_policy'
      | 'employee_overview'
      | 'end_user_terms_of_service'
      | 'e_sign_policy'
      | 'financial_statement'
      | 'form_1099_int'
      | 'fraud_prevention_policy'
      | 'funds_availability_policy'
      | 'funds_availability_disclosure'
      | 'funds_flow_diagram'
      | 'gramm_leach_bliley_act_policy'
      | 'information_security_policy'
      | 'insurance_policy'
      | 'investor_presentation'
      | 'loan_application_processing_policy'
      | 'management_biography'
      | 'marketing_and_advertising_policy'
      | 'network_security_diagram'
      | 'onboarding_questionnaire'
      | 'penetration_test_report'
      | 'platform_compliance_metrics_submission'
      | 'consumer_platform_compliance_metrics_submission'
      | 'program_risk_assessment'
      | 'security_audit_report'
      | 'servicing_policy'
      | 'transaction_monitoring_report'
      | 'truth_in_savings_act_policy'
      | 'underwriting_policy'
      | 'vendor_list'
      | 'vendor_management_policy'
      | 'vendor_risk_management_report'
      | 'volume_forecast'
    >;
  }

  export interface CreatedAt {
    /**
     * Return results after this [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)
     * timestamp.
     */
    after?: string;

    /**
     * Return results before this [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601)
     * timestamp.
     */
    before?: string;

    /**
     * Return results on or after this
     * [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) timestamp.
     */
    on_or_after?: string;

    /**
     * Return results on or before this
     * [ISO 8601](https://en.wikipedia.org/wiki/ISO_8601) timestamp.
     */
    on_or_before?: string;
  }
}

export namespace Documents {
  export import Document = API.Document;
  export import DocumentsPage = API.DocumentsPage;
  export import DocumentListParams = API.DocumentListParams;
}
