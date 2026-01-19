/**
 * @swagger
 * /api/contatos/{id}:
 *   delete:
 *     summary: Exclui um contato pelo ID
 *     tags: [Contatos]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: number
 *         example: 18
 *     responses:
 *       204:
 *         description: Contato excluído com sucesso
 *       400:
 *         description: ID inválido ou contato não encontrado
 *         content:
 *           application/json:
 *             example:
 *               success: false
 *               message: Contato não encontrado para exclusão.
 *       500:
 *         description: Erro ao deletar contato
 *         content:
 *           application/json:
 *             example:
 *               success: false
 *               message: Erro ao deletar contato!
 */
