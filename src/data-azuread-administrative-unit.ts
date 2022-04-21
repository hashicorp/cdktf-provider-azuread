// https://www.terraform.io/docs/providers/azuread/d/administrative_unit
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DataAzureadAdministrativeUnitConfig extends cdktf.TerraformMetaArguments {
  /**
  * The display name for the administrative unit
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/d/administrative_unit#display_name DataAzureadAdministrativeUnit#display_name}
  */
  readonly displayName?: string;
  /**
  * The object ID of the administrative unit
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/d/administrative_unit#object_id DataAzureadAdministrativeUnit#object_id}
  */
  readonly objectId?: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/d/administrative_unit#timeouts DataAzureadAdministrativeUnit#timeouts}
  */
  readonly timeouts?: DataAzureadAdministrativeUnitTimeouts;
}
export interface DataAzureadAdministrativeUnitTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/d/administrative_unit#create DataAzureadAdministrativeUnit#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/d/administrative_unit#delete DataAzureadAdministrativeUnit#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/d/administrative_unit#read DataAzureadAdministrativeUnit#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/d/administrative_unit#update DataAzureadAdministrativeUnit#update}
  */
  readonly update?: string;
}

export function dataAzureadAdministrativeUnitTimeoutsToTerraform(struct?: DataAzureadAdministrativeUnitTimeoutsOutputReference | DataAzureadAdministrativeUnitTimeouts | cdktf.IResolvable): any {
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

export class DataAzureadAdministrativeUnitTimeoutsOutputReference extends cdktf.ComplexObject {
  private isEmptyObject = false;

  /**
  * @param terraformResource The parent resource
  * @param terraformAttribute The attribute on the parent resource this class is referencing
  */
  public constructor(terraformResource: cdktf.IInterpolatingParent, terraformAttribute: string) {
    super(terraformResource, terraformAttribute, false, 0);
  }

  public get internalValue(): DataAzureadAdministrativeUnitTimeouts | undefined {
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

  public set internalValue(value: DataAzureadAdministrativeUnitTimeouts | undefined) {
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
* Represents a {@link https://www.terraform.io/docs/providers/azuread/d/administrative_unit azuread_administrative_unit}
*/
export class DataAzureadAdministrativeUnit extends cdktf.TerraformDataSource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "azuread_administrative_unit";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azuread/d/administrative_unit azuread_administrative_unit} Data Source
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DataAzureadAdministrativeUnitConfig = {}
  */
  public constructor(scope: Construct, id: string, config: DataAzureadAdministrativeUnitConfig = {}) {
    super(scope, id, {
      terraformResourceType: 'azuread_administrative_unit',
      terraformGeneratorMetadata: {
        providerName: 'azuread',
        providerVersion: '2.21.0',
        providerVersionConstraint: '~> 2.0'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._displayName = config.displayName;
    this._objectId = config.objectId;
    this._timeouts.internalValue = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // description - computed: true, optional: false, required: false
  public get description() {
    return this.getStringAttribute('description');
  }

  // display_name - computed: true, optional: true, required: false
  private _displayName?: string; 
  public get displayName() {
    return this.getStringAttribute('display_name');
  }
  public set displayName(value: string) {
    this._displayName = value;
  }
  public resetDisplayName() {
    this._displayName = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get displayNameInput() {
    return this._displayName;
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // members - computed: true, optional: false, required: false
  public get members() {
    return this.getListAttribute('members');
  }

  // object_id - computed: true, optional: true, required: false
  private _objectId?: string; 
  public get objectId() {
    return this.getStringAttribute('object_id');
  }
  public set objectId(value: string) {
    this._objectId = value;
  }
  public resetObjectId() {
    this._objectId = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get objectIdInput() {
    return this._objectId;
  }

  // visibility - computed: true, optional: false, required: false
  public get visibility() {
    return this.getStringAttribute('visibility');
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts = new DataAzureadAdministrativeUnitTimeoutsOutputReference(this, "timeouts");
  public get timeouts() {
    return this._timeouts;
  }
  public putTimeouts(value: DataAzureadAdministrativeUnitTimeouts) {
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
      display_name: cdktf.stringToTerraform(this._displayName),
      object_id: cdktf.stringToTerraform(this._objectId),
      timeouts: dataAzureadAdministrativeUnitTimeoutsToTerraform(this._timeouts.internalValue),
    };
  }
}
