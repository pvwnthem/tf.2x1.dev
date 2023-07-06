/** @format */

export class RoleManager {
    role: string
    perms: any

    constructor(role: string) {
        this.role = role
        this.perms = {
            user: {
                delete: false,
                edit: false,
            },
            moderator: {
                delete: true,
                edit: false,
            },
            admin: {},
            owner: {
                delete: true,
                edit: true,
            },
        }
    }
    public hasPerm(perm: any): boolean {
        return this.perms[this.role][perm] === true
    }
}
