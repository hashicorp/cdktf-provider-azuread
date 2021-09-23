// https://www.terraform.io/docs/providers/azuread/r/group_member.html
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface GroupMemberConfig extends cdktf.TerraformMetaArguments {
  /**
  * The object ID of the group you want to add the member to
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/group_member.html#group_object_id GroupMember#group_object_id}
  */
  readonly groupObjectId: string;
  /**
  * The object ID of the principal you want to add as a member to the group. Supported object types are Users, Groups or Service Principals
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/group_member.html#member_object_id GroupMember#member_object_id}
  */
  readonly memberObjectId: string;
  /**
  * timeouts block
  * 
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/group_member.html#timeouts GroupMember#timeouts}
  */
  readonly timeouts?: GroupMemberTimeouts;
}
export interface GroupMemberTimeouts {
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/group_member.html#create GroupMember#create}
  */
  readonly create?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/group_member.html#delete GroupMember#delete}
  */
  readonly delete?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/group_member.html#read GroupMember#read}
  */
  readonly read?: string;
  /**
  * Docs at Terraform Registry: {@link https://www.terraform.io/docs/providers/azuread/r/group_member.html#update GroupMember#update}
  */
  readonly update?: string;
}

function groupMemberTimeoutsToTerraform(struct?: GroupMemberTimeouts): any {
  if (!cdktf.canInspect(struct)) { return struct; }
  return {
    create: cdktf.stringToTerraform(struct!.create),
    delete: cdktf.stringToTerraform(struct!.delete),
    read: cdktf.stringToTerraform(struct!.read),
    update: cdktf.stringToTerraform(struct!.update),
  }
}


/**
* Represents a {@link https://www.terraform.io/docs/providers/azuread/r/group_member.html azuread_group_member}
*/
export class GroupMember extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType: string = "azuread_group_member";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://www.terraform.io/docs/providers/azuread/r/group_member.html azuread_group_member} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options GroupMemberConfig
  */
  public constructor(scope: Construct, id: string, config: GroupMemberConfig) {
    super(scope, id, {
      terraformResourceType: 'azuread_group_member',
      terraformGeneratorMetadata: {
        providerName: 'azuread'
      },
      provider: config.provider,
      dependsOn: config.dependsOn,
      count: config.count,
      lifecycle: config.lifecycle
    });
    this._groupObjectId = config.groupObjectId;
    this._memberObjectId = config.memberObjectId;
    this._timeouts = config.timeouts;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // group_object_id - computed: false, optional: false, required: true
  private _groupObjectId: string;
  public get groupObjectId() {
    return this.getStringAttribute('group_object_id');
  }
  public set groupObjectId(value: string) {
    this._groupObjectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get groupObjectIdInput() {
    return this._groupObjectId
  }

  // id - computed: true, optional: true, required: false
  public get id() {
    return this.getStringAttribute('id');
  }

  // member_object_id - computed: false, optional: false, required: true
  private _memberObjectId: string;
  public get memberObjectId() {
    return this.getStringAttribute('member_object_id');
  }
  public set memberObjectId(value: string) {
    this._memberObjectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get memberObjectIdInput() {
    return this._memberObjectId
  }

  // timeouts - computed: false, optional: true, required: false
  private _timeouts?: GroupMemberTimeouts;
  public get timeouts() {
    return this.interpolationForAttribute('timeouts') as any;
  }
  public set timeouts(value: GroupMemberTimeouts ) {
    this._timeouts = value;
  }
  public resetTimeouts() {
    this._timeouts = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get timeoutsInput() {
    return this._timeouts
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      group_object_id: cdktf.stringToTerraform(this._groupObjectId),
      member_object_id: cdktf.stringToTerraform(this._memberObjectId),
      timeouts: groupMemberTimeoutsToTerraform(this._timeouts),
    };
  }
}
