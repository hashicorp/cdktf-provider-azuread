// https://www.terraform.io/docs/providers/azuread/r/custom_directory_role
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface CustomDirectoryRoleConfig extends cdktf.TerraformMetaArguments {
  /**
  * The description of the custom directory role
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/custom_directory_role#description CustomDirectoryRole#description}
  */
  readonly description?: string;
  /**
  * The display name of the custom directory role
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/custom_directory_role#display_name CustomDirectoryRole#display_name}
  */
  readonly displayName: string;
  /**
  * Indicates whether the role is enabled for assignment
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/custom_directory_role#enabled CustomDirectoryRole#enabled}
  */
  readonly enabled: boolean | cdktf.IResolvable;
  /**
  * Custom template identifier that is typically used if one needs an identifier to be the same across different directories.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/custom_directory_role#template_id CustomDirectoryRole#template_id}
  */
  readonly templateId?: string;
  /**
  * The version of the role definition.
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/custom_directory_role#version CustomDirectoryRole#version}
  */
  readonly version: string;
  /**
  * permissions block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/custom_directory_role#permissions CustomDirectoryRole#permissions}
  */
  readonly permissions: CustomDirectoryRolePermissions[] | cdktf.IResolvable;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/custom_directory_role#timeouts CustomDirectoryRole#timeouts}
  */
  readonly timeouts?: CustomDirectoryRoleTimeouts;
}
export interface CustomDirectoryRolePermissions {
  /**
  * Set of tasks that can be performed on a resource
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/custom_directory_role#allowed_resource_actions CustomDirectoryRole#allowed_resource_actions}
  */
  readonly allowedResourceActions: string[];
}

export function customDirectoryRolePermissionsToTerraform(struct?: CustomDirectoryRolePermissions | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    allowed_resource_actions: cdktf.listMapper(cdktf.stringToTerraform)(struct!.allowedResourceActions),
  }
}

export interface CustomDirectoryRoleTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/custom_directory_role#create CustomDirectoryRole#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/custom_directory_role#delete CustomDirectoryRole#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/custom_directory_role#read CustomDirectoryRole#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/custom_directory_role#update CustomDirectoryRole#update}
  */
  readonly update?: string;
}

export function customDirectoryRoleTimeoutsToTerraform(struct?: CustomDirectoryRoleTimeoutsOutputReference | CustomDirectoryRoleTimeouts | cdktf.IResolvable): any {
  if (!cdktf.canInspect(struct) || cdktf.Tokenization.isResolvable(struct)) { return struct; }
  if (cdktf.isComplexElement(struct)) {
    throw new Error("A complex element was used as configuration, this is not supported: https://cdk.tf/complex-object-as-configuration");
  }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}

export class CustomDirectoryRoleTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  * @param isSingleItem True if this is a block, false if it's a list
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string, isSingleItem: boolean) {
    super(terraformResource, terraformAttribute, isSingleItem);
  }

  public get internalValue(): CustomDirectoryRoleTimeouts | undefined {
    let hasAnyValues = this.isEmptyObject;
    const internalValueResult: any = {};
    if (this._create !== undefined) {
      hasAnyValues = true;
      internalValueResult.create = this._create;
    }
    if (this._delete !== undefined) {
      hasAnyValues = true;
      internalValueResult.delete = this._delete;
    }
    if (this._read !== undefined) {
      hasAnyValues = true;
      internalValueResult.read = this._read;
    }
    if (this._update !== undefined) {
      hasAnyValues = true;
      internalValueResult.update = this._update;
    }
    return hasAnyValues ? internalValueResult : undefined;
  }

  public set internalValue(value: CustomDirectoryRoleTimeouts | undefined) {
    if (value === undefined) {
      this.isEmptyObject = false;
      this._create = undefined;
      this._delete = undefined;
      this._read = undefined;
      this._update = undefined;
    }
    else {
      this.isEmptyObject = Object.keys(value).length === 0;
      this._create = value.create;
      this._delete = value.delete;
      this._read = value.read;
      this._update = value.update;
    }
  }

  // create - computed: false, optional: true, required: false
  private _create?: string; 
  public get create() {
    return this.getStringAttribute('create');
  }
  public set create(value: string) {
    this._create = value;
  }
  public resetCreate() {
    this._create = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get createInput() {
    return this._create;
  }

  // delete - computed: false, optional: true, required: false
  private _delete?: string; 
  public get delete() {
    return this.getStringAttribute('delete');
  }
  public set delete(value: string) {
    this._delete = value;
  }
  public resetDelete() {
    this._delete = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get deleteInput() {
    return this._delete;
  }

  // read - computed: false, optional: true, required: false
  private _read?: string; 
  public get read() {
    return this.getStringAttribute('read');
  }
  public set read(value: string) {
    this._read = value;
  }
  public resetRead() {
    this._read = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get readInput() {
    return this._read;
  }

  // update - computed: false, optional: true, required: false
  private _update?: string; 
  public get update() {
    return this.getStringAttribute('update');
  }
  public set update(value: string) {
    this._update = value;
  }
  public resetUpdate() {
    this._update = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get updateInput() {
    return this._update;
  }
}

/**
* Represents a {@link https://www.terraform.io/docs/providers/azuread/r/custom_directory_role azuread_custom_directory_role}
*/
export class CustomDirectoryRole extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azuread_custom_directory_role";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azuread/r/custom_directory_role azuread_custom_directory_role} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options CustomDirectoryRoleConfig
  */
  public constructor(scope: Construct, id: string, config: CustomDirectoryRoleConfig) {
    super(scope, id, {
      terraformResourceType: 'azuread_custom_directory_role',
      terraformGeneratorMetadata: {
        providerName: 'azuread'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._description = config.description;
    this._displayName = config.displayName;
    this._enabled = config.enabled;
    this._templateId = config.templateId;
    this._version = config.version;
    this._permissions = config.permissions;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: false, optional: true, required: false
  private _description?: string; 
  public get description() {
    return this.getStringAttribute('description');
  }
  public set description(value: string) {
    this._description = value;
  }
  public resetDescription() {
    this._description = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get descriptionInput() {
    return this._description;
  }

  // display_name - computed: false, optional: false, required: true
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // enabled - computed: false, optional: false, required: true
  private _enabled?: boolean | cdktf.IResolvable; 
  public get enabled() {
    return this.getBooleanAttribute('enabled');
  }
  public set enabled(value: boolean | cdktf.IResolvable) {
    this._enabled = value;
  }
  // Temporarily expose input value. Use with caution.
  public get enabledInput() {
    return this._enabled;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // object_id - computed: true, optional: false, required: false
  public get objectId() {
    return this.getStringAttribute('object_id');
  }

  // template_id - computed: true, optional: true, required: false
  private _templateId?: string; 
  public get templateId() {
    return this.getStringAttribute('template_id');
  }
  public set templateId(value: string) {
    this._templateId = value;
  }
  public resetTemplateId() {
    this._templateId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get templateIdInput() {
    return this._templateId;
  }

  // version - computed: false, optional: false, required: true
  private _version?: string; 
  public get version() {
    return this.getStringAttribute('version');
  }
  public set version(value: string) {
    this._version = value;
  }
  // Temporarily expose input value. Use with caution.
  public get versionInput() {
    return this._version;
  }

  // permissions - computed: false, optional: false, required: true
  private _permissions?: CustomDirectoryRolePermissions[] | cdktf.IResolvable; 
  public get permissions() {
    // Getting the computed value is not yet implemented
    return cdktf.Token.asAny(cdktf.Fn.tolist(this.interpolationForAttribute('permissions')));
  }
  public set permissions(value: CustomDirectoryRolePermissions[] | cdktf.IResolvable) {
    this._permissions = value;
  }
  // Temporarily expose input value. Use with caution.
  public get permissionsInput() {
    return this._permissions;
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new CustomDirectoryRoleTimeoutsOutputReference(this, "timeouts", true);
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: CustomDirectoryRoleTimeouts) {
    this._timeouts.internalValue = value;
  }
  public resetTimeouts() {
    this._timeouts.internalValue = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts.internalValue;
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      description: cdktf.stringToTerraform(this._description),
      display_name: cdktf.stringToTerraform(this._displayName),
      enabled: cdktf.booleanToTerraform(this._enabled),
      template_id: cdktf.stringToTerraform(this._templateId),
      version: cdktf.stringToTerraform(this._version),
      permissions: cdktf.listMapper(customDirectoryRolePermissionsToTerraform)(this._permissions),
      timeouts: customDirectoryRoleTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}