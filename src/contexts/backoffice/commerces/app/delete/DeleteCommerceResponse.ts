<<<<<<< HEAD
import CommandResponse from '@shared/domain/bus/command/CommandResponse';
import Commerce from '@backoffice-contexts/commerces/domain/Commerce';

export default class DeleteCommerceResponse extends CommandResponse<Commerce> {

}
=======
import CommandResponse from "@shared/domain/bus/command/CommandResponse";
import Commerce from "@backoffice-contexts/commerces/domain/Commerce";

export default class DeleteCommerceResponse extends CommandResponse<Commerce> {
    readonly data: any;
}
>>>>>>> 6b26b4a5faf35925162d7796036021cfe9c41178
