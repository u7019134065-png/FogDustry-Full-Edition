Events.on(UnitDestroyEvent, e => {
    if(e.unit == null || e.unit.type == null) return;
    if(e.unit.type.name !== "airshipfog") return;

    const x = e.unit.x;
    const y = e.unit.y;
    const team = e.unit.team;

    const radius = 50 * 8; // 50 блоков
    Damage.dynamicExplosion(x, y, 1, 1, 1, radius, false, true, team, Fx.impactReactorExplosion, 24);
    Damage.damage(team, x, y, radius, 1500, true, true, true);
    Damage.createIncend(x, y, radius, 30);
});